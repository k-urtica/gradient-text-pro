import { domToPng, domToSvg, domToWebp } from 'modern-screenshot';

export type ScreenshotFormat = 'png' | 'webp' | 'svg';

export interface ScreenshotOptions {
  /**
   * Image format
   * @default 'png'
   */
  format?: ScreenshotFormat;

  /**
   * Image scale factor
   * @default 1
   */
  scale?: number;

  /**
   * Background color
   * @default transparent
   */
  backgroundColor?: string;
}

export interface ScreenshotResult {
  /**
   * Base64 data URL
   */
  dataUrl: string;

  /**
   * Generated filename
   */
  filename: string;
}

export function useScreenshot() {
  const isLoading = ref(false);
  const error = shallowRef<unknown>();

  const formatHandlers = {
    png: { capture: domToPng, extension: 'png' },
    webp: { capture: domToWebp, extension: 'webp' },
    svg: { capture: domToSvg, extension: 'svg' },
  } as const;

  /**
   * Capture DOM element as image in specified format
   * @param element - HTML element to capture
   * @param options - Screenshot options
   * @returns Promise resolving to screenshot result
   */
  async function captureElement(element: HTMLElement, options: ScreenshotOptions): Promise<ScreenshotResult> {
    const { format = 'png', ...handlerOptions } = options;
    const handler = formatHandlers[format];

    const dataUrl = await handler.capture(element, handlerOptions);
    const filename = `gradient-${Date.now()}.${handler.extension}`;

    return {
      dataUrl,
      filename,
    };
  }

  /**
   * Download image result as file
   * @param result - Screenshot result containing data URL and filename
   */
  function downloadImage(result: ScreenshotResult): void {
    const link = document.createElement('a');
    link.download = result.filename;
    link.href = result.dataUrl;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Capture DOM element and download as image file
   * @param element - HTML element to capture
   * @param options - Screenshot options (format defaults to 'png')
   * @returns Promise that resolves when download is complete
   */
  async function downloadAsImage(element: HTMLElement, options: ScreenshotOptions = {}): Promise<void> {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await captureElement(element, options);
      downloadImage(result);
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading: readonly(isLoading),
    error: readonly(error),
    downloadAsImage,
  };
}
