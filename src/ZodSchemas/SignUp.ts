import {z} from "zod" 

const VerifyCode = z.string().min(6 ,  "verify code must be of 6 characters").max(6 ,  "verify code must be of 6 characters")

const SignUpSchema = z.object({
  fullName: z.string().min(1, "Full name is required")
  .max(20 , "Full name must not be more than"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  postalCode: z.string().min(5, "Postal code must be at least 5 characters long"),
  state: z.string().min(1, "State is required"),
  ssn: z.string().regex(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format"),
  dateOfBirth: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date().refine((date) => {
    return date <= new Date();
  }, "Date of birth cannot be in the future")),
  address: z.string().min(10, "Address must be atleast of 10 characters"),

  
});

type IUserSchema = z.infer<typeof SignUpSchema>;

export {SignUpSchema , VerifyCode };    export type { IUserSchema };

