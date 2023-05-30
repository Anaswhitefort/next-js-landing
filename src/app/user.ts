import { User as FirebaseUser } from "firebase/auth"

// Change FirebaseUser to something else if using another authentication mecanism
export type User = BaseUser & FirebaseUser;

type BaseUser = {
  name?: string;
}

