export class Comments {
    id!: number;
    postId: number;
    title: string;
    email: string;
    body: string;

    constructor(
        postId?: number,
        title?: string,
        email?: string,
        body?: string
    ) {
        this.postId = postId || 0;
        this.title = title || '';
        this.email = email || '';
        this.body = body || '';
    }
}
