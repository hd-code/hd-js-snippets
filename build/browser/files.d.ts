/*! files v0.0.1 | MIT | © Hannes Dröse https://github.com/hd-code/js-snippets */
/** Saves a string of data to a file. */
export declare function downloadFile(data: string, filename?: string): Promise<void>;
/** Opens the file browser to choose a file. */
export declare function openFile(): Promise<string>;