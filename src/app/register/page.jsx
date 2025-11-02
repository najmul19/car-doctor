
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Form Card */}
      <RegisterForm></RegisterForm>
      
    </div>
  );
};

export default RegisterPage;
