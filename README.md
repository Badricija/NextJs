This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Uzsākšana : 
 - npm i 

Mājaslapas ielāde:
 - npm run dev

 Atver [http://localhost:3000](http://localhost:3000) Šeit būs redzami mājaslapas rezūltāti. 
 Ja Nav izdevies atvērt ar šiem linkiem, terminālī uzrādīsies links.
 ar CTRL + CLICK mājaslapa parādīsies pārlūkā.

NEXT AUTH :

Lokālā Authentifikācija 

E-pasts un parole
- http://localhost:3000/api/auth/signin
- admin@test.com
- password

SCHEMAS :
 -COMMENTS: 
    const CommentSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
 -POSTS:
    const postSchema: Schema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    blog1description: {
      type: String,
    },
    blog1title: {
      type: String,
    },
    blog1image: {
      type: String,
    },
    blog2description: {
      type: String,
    },
    blog2title: {
      type: String,
    },
    blog2image: {
      type: String,
    },
    blog3description: {
      type: String,
    },
    blog3title: {
      type: String,
    },
    blog3image: {
      type: String,
    },
    
  },
  { timestamps: true }
);
- TAGS:
  const TagSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
- USER: 
   const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default: "/images/profile.png",
    },
  },
  { timestamps: true },
);
-VEICIET KODU IZPĒTI, KAD ATRODĀS MAPĪTĒS.  
