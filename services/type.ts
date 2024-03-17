export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface Posts {
  id: number;
  title: string;
  body: string;
}

export interface Todos {
  id: number;
  title: string;
  complated: string;
}

export interface Comments {
  id: number;
  name: string;
  email: string;
  body: string;
}
