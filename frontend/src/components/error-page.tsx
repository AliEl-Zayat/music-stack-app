"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import errorAnimation from "@/assets/lottie/error.json"; // Place your animation JSON here

const ErrorPage = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-48">
            <Lottie animationData={errorAnimation} loop={true} />
          </div>
          <CardTitle className="text-xl font-bold text-destructive">
            Oops! Something went wrong
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">We hit an unexpected error:</p>
          <pre className="whitespace-pre-wrap break-words rounded-md bg-muted p-2 text-sm text-destructive">
            {error.message}
          </pre>
          <Button onClick={resetErrorBoundary} className="mt-2">
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorPage;
