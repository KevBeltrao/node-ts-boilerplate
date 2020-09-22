import { Schema, model, Document } from 'mongoose';
import { hash } from 'bcryptjs';

interface IUserSchema extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
}, {
  timestamps: true,
});

UserSchema.pre<IUserSchema>('save', async function createHash(next) {
  if (!this.password) return next();

  this.password = await hash(this.password, 10);
  console.log('password save', this.password);

  return next();
});

export default model<IUserSchema>('User', UserSchema);
