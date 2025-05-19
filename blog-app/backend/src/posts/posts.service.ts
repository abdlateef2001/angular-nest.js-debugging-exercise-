import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    private posts = [];

    create(post) {
        this.posts.push(post);
        return post;
    }

    findAll() {
        return this.posts;
    }

    findOne(id: number) {
        return this.posts.find(post => post.id === id);
    }

    update(id: number, updatedPost) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            this.posts[index] = { ...this.posts[index], ...updatedPost };
            return this.posts[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            return this.posts.splice(index, 1);
        }
        return null;
    }
}