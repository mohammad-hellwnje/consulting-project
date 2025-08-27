export const formDataSignup = [
  {
    title: "يسعدنا انضمامك",
    paragraph: "سجلي  بياناتك  لبدء  رحلتك  معنا",
    form: [
      {
        label: "الاسم الكامل",
        type: "text",
        name: "fullName",
        placeholder: "ادخل الاسم الكامل",
        required: true,
        value: "fullName",
      },
      {
        label: "البريد الالكتروني",
        type: "email",
        name: "email",
        placeholder: "ادخل البريد الالكتروني",
        required: true,
        value: "email",
      },
      {
        label: "رقم الهاتف",
        type: "tel",
        name: "phoneNumber", // ✅ مطابق للـ schema
        placeholder: "ادخل رقم الهاتف",
        required: true,
        value: "phoneNumber", // ✅ مطابق للـ schema
      },
      {
        label: "كلمة المرور",
        type: "password",
        name: "password",
        placeholder: "ادخل كلمة المرور",
        required: true,
        value: "password",
      },
      {
        label: "تأكيد كلمة المرور",
        type: "password",
        name: "confirmPassword",
        placeholder: "ادخل تأكيد كلمة المرور",
        required: true,
        value: "confirmPassword",
      }],
    link: `لديك حساب بالفعل ؟ <span class='font-bold'> قم بتسجيل الدخول </span>`,
  },
];

export const formDataLogin = [
  {
    title: "مرحبا بكِ",
    paragraph: "قومي بتسجيل الدخول إلى حسابك",
    form: [
      {
        label: "البريد الالكتروني",
        type: "email",
        name: "email",
        placeholder: "ادخل البريد الالكتروني",
        required: true,
        value: "email",
      },
      {
        label: "كلمة المرور",
        type: "password",
        name: "password",
        placeholder: "ادخل كلمة المرور",
        required: true,
        value: "password",
      },
    ],
    link: `ليس لديك حساب ؟ <span class="font-bold"> انشئ حساب </span>`,
  },
];
