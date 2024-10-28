import { Injectable } from '@nestjs/common';
import { BookDto } from './books/dto/book.dto';
import { CreateBookDto } from './books/dto/create-book.dto';
import { UpdateBookDto } from './books/dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Title 1',
      author: 'Author 1',
      rating: 3.9,
    },
    {
      id: 2,
      title: 'Title 2',
      author: 'Author 2',
      rating: 3.9,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `this actions returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `this actions updates a #${id} book`;
  }

  remove(id: number) {
    return `this actions removes a #${id} book`;
  }
}
