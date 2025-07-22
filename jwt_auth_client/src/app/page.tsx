export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to JWT Auth App</h1>
      <p className="mt-2">
        Go to{" "}
        <a href="/login" className="underline text-blue-500">
          Login
        </a>{" "}
        or{" "}
        <a href="/register" className="underline text-blue-500">
          Register
        </a>
      </p>
    </div>
  );
}
