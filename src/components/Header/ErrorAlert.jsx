import { Alert } from "flowbite-react";

export default function ErrorAlert({ message, show }) {
  return (
    <div className={`h-10 w-full ${show ? "inline" : "hidden"}`}>
      <Alert color="failure">
        <span>
          <span className="font-medium">Info alert!</span> {message}
        </span>
      </Alert>
    </div>
  );
}
