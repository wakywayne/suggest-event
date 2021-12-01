export interface ExampleInterface {
  id: number;
  email: string;
  password: string;
  created_at: Date;
}

export interface Users {
  password: any;
  id: number;
  personsname: string;
  email: string;
  userpassword: string;
  created_at: Date;
}

export interface MysqlResponse{
  affectedRows: number;
  insertId: number;
}
