export class Comments {
    id!: number;
    postId: number;
    name: string;
    email: string;
    body: string;

    constructor(
        postId?: number,
        name?: string,
        email?: string,
        body?: string
    ) {
        this.postId = postId || 0;
        this.name = name || '';
        this.email = email || '';
        this.body = body || '';
    }
}
