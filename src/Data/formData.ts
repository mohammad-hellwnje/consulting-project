export const  formDataSignup  =
[
    {
        title: 'يسعدنا انضمامك',
        paragraph: 'سجلي  بياناتك  لبدء  رحلتك  معنا',
        form :
        [
            {
                label: 'الاسم االثلاثي',
                type: 'text',
                name: 'fullName',
                placeholder: 'ادخل الاسم الثلاثي',
                required: true,
                value: 'fullName'
            },
            {
                label: 'البريد الالكتروني',
                type: 'email',
                name: 'email',
                placeholder: 'ادخل البريد الالكتروني',
                required: true,
                value: 'email'
            },
            {
                label: ' رقم الهاتف',
                type: 'tel',
                name: 'phone',
                placeholder: 'ادخل رقم الهاتف',
                required: true,
                value: 'phone'
            },
            {
                label: ' كلمة المرور ',
                type: 'password',
                name: 'password',
                placeholder: 'ادخل كلمة المرور  ',
                required: true,
                value: 'password'
            },
            {
                label: 'تأكيد كلمة المرور',
                type: 'password',
                name: 'confirmPassword',
                placeholder: 'ادخل تأكيد كلمة المرور',
                required: true,
                value: 'confirmPassword'
            },
        ],
        LinkB : "أوافق على السياسة والخصوصية",
        button : "تسجيل الدخول",
        link : `لديك حساب بالفعل ؟ <span class = 'font-bold '> قم بتسجيل الدخول </span>`
    }
];
export const formDataLogin = 
[
    {
        title: 'مرحبا بكِ',
        paragraph : 'قومي بتسجيل  الدخول  إلى  حسابك',
        form :
        [
            {
                label: 'البريد الالكتروني',
                type: 'email',
                name: 'email',
                placeholder: 'ادخل البريد الالكتروني',
                required: true,
                value: 'email'
            },
            {
                label: ' كلمة المرور ',
                type: 'password',
                name: 'password',
                placeholder: 'ادخل كلمة المرور  ',
                required: true,
                value: 'password'
            },
        ],
        LinkB : ' نسيت كلمة المرور ؟',
        button :"تسجيل الدخول",
        link : `ليس لديك حساب ؟  <span class="font-bold "> انشئ حساب </span>`

    },
]
