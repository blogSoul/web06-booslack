import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserHasWorkspace } from './UserHasWorkspace';

export interface IUser {
  id: number;

  nickname: string;

  email: string;

  type: string;
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nickname!: string;

  @Column()
  email!: string;

  @Column()
  type!: string;

  @OneToMany(
    () => UserHasWorkspace,
    (userHasWorkspace) => userHasWorkspace.user
  )
  userHasWorkspaces!: UserHasWorkspace[];
}
