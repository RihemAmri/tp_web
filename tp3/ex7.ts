
function identity<T>(value: T): T {
  return value;
}


function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}


class Repository<T extends { id: string | number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(id: T["id"]): boolean {
    const index = this.items.findIndex((it) => it.id === id);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }

  getAll(): T[] {
    return [...this.items];
  }

  findById(id: T["id"]): T | undefined {
    return this.items.find((it) => it.id === id);
  }
}

interface ApiResponse<T> {
  data: T;
  error?: string;
}
