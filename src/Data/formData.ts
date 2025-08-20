// بيانات نموذج التسجيل
export const signupFormData = {
    title: 'يسعدنا انضمامك',
    paragraph: 'سجلي  بياناتك  لبدء  رحلتك  معنا',
    form: [
        {
            label: 'الاسم الثلاثي',
            type: 'text',
            name: 'fullName',
            placeholder: 'ادخل الاسم الثلاثي',
        },
        {
            label: 'البريد الالكتروني',
            type: 'email',
            name: 'email',
            placeholder: 'ادخل البريد الالكتروني',
        },
        {
            label: 'رقم الهاتف',
            type: 'tel',
            name: 'phoneNumber',
            placeholder: 'ادخل رقم الهاتف',
        },
        {
            label: 'كلمة المرور',
            type: 'password',
            name: 'password',
            placeholder: 'ادخل كلمة المرور',
        },
        {
            label: 'تأكيد كلمة المرور',
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'ادخل تأكيد كلمة المرور',
        },
    ],
    LinkB: "أوافق على السياسة والخصوصية",
    button: "إنشاء حساب",
    link: `لديك حساب بالفعل ؟ <span class='font-bold'>قم بتسجيل الدخول</span>`
};
// بيانات نموذج تسجيل الدخول
export const loginFormData = {
    title: 'مرحبا بكِ',
    paragraph: 'قومي بتسجيل الدخول إلى حسابك',
    form: [
        {
            label: 'البريد الالكتروني',
            type: 'email',
            name: 'email',
            placeholder: 'ادخل البريد الالكتروني',
        },
        {
            label: 'كلمة المرور',
            type: 'password',
            name: 'password',
            placeholder: 'ادخل كلمة المرور',
        },
    ],
    LinkB: 'نسيت كلمة المرور ؟',
    button: "تسجيل الدخول",
    link: `ليس لديك حساب ؟ <span class="font-bold">انشئ حساب</span>`
};

// للتوافق مع الكود القديم
export const formDataSignup = [signupFormData];
export const formDataLogin = [loginFormData];
