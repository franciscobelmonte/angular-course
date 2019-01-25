export class FileItem {
    public file: File;
    public filename: string;
    public url: string;
    public isUploading: boolean;
    public progress: number;

    constructor (file: File) {
        this.file = file;
        this.filename = file.name;
        this.isUploading = false;
        this.progress = 0;
    }
}
