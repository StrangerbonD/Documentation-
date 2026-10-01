# Documentation-

> **ASP.NET Core Web API — JWT Authentication & Authorization Documentation**  
> সম্পূর্ণ গাইডটি সহজ ও প্রাঞ্জল বাংলায় এবং টেকনিক্যাল টার্মসমূহ অপরিবর্তিত রেখে তৈরি করা হয়েছে।

🌐 **Live Documentation:** [https://strangerbond.github.io/Documentation-/](https://strangerbond.github.io/Documentation-/)

---

## 📖 টপিক সিলেবাস ও রোডম্যাপ

1. **[পরিচিতি ও ওভারভিউ](jwt-auth-docs/docs/introduction.html)** — ডকুমেন্টেশনের উদ্দেশ্য, টেক-স্ট্যাক ও গাইডলাইন্স।
2. **[Authentication vs Authorization](jwt-auth-docs/docs/authentication-vs-authorization.html)** — পরিচয় নিশ্চিতকরণ বনাম পারমিশন যাচাইয়ের ভেতরে মূল পার্থক্য।
3. **[JWT Structure ও Claims Deep Dive](jwt-auth-docs/docs/jwt-structure.html)** — Header, Payload, Signature এবং Claims-এর অভ্যন্তরীণ মেকানিজম।
4. **[ASP.NET Core Setup ও Middleware](jwt-auth-docs/docs/aspnet-core-setup.html)** — `Program.cs`, Dependency Injection ও পাইপলাইন কনফিগারেশন।
5. **[Login Controller ও Token Generation](jwt-auth-docs/docs/token-generation.html)** — DTO, Password Hashing (BCrypt) এবং Access Token তৈরি।
6. **[Role-based ও Policy Authorization](jwt-auth-docs/docs/role-based-authorization.html)** — `[Authorize(Roles = "...")]` এবং অ্যান্ডপয়েন্ট সুরক্ষা।
7. **[Refresh Token Flow & Architecture](jwt-auth-docs/docs/refresh-token.html)** — Token Rotation, Revocation এবং Silent Refresh আর্কিটেকচার।

---

## 🚀 প্রতিটি টপিকের ফরম্যাট

প্রতিটি চ্যাপ্টার ৮টি ধারাবাহিক ধাপে সাজানো হয়েছে:
1. **এটা কী?** (What is it?)
2. **কেন দরকার?** (Why do we need it?)
3. **এটা কীভাবে কাজ করে?** (How does it work?)
4. **বাস্তব জীবনের উদাহরণ** (Real-life analogy)
5. **কোড এক্সাম্পল** (C# / .NET 8)
6. **কোডের লাইন-বাই-লাইন ব্যাখ্যা** (Code breakdown)
7. **কমন ভুলগুলো** (Common mistakes & security pitfalls)
8. **শর্ট সামারি** (Key takeaways)

---

## 🛠️ লোকালি কীভাবে রান করবেন?

কোনো সার্ভার বা ডিপেন্ডেন্সি ছাড়াই সরাসরি ব্রাউজারে রান করা যাবে:
1. রিপোজিটরিটি ক্লোন করুন:
   ```bash
   git clone https://github.com/StrangerbonD/Documentation-.git
   ```
2. ব্রাউজারে `index.html` অথবা `jwt-auth-docs/index.html` ফাইলটি ওপেন করুন।
