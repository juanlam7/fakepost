export class Post {
    id!: number;
    userId: number;
    title: string;
    body: string;

    constructor(
        userId?: number,
        title?: string,
        body?: string
    ) {
        this.userId = userId || 0;
        this.title = title || '';
        this.body = body || '';
    }
}
