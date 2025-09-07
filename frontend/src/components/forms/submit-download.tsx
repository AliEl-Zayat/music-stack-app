import InputField from "@/components/input-field";
import { Button } from "@/components/ui/button";
import { useSubmitDownload } from "@/hooks/useSubmitDownload";

const DownloadForm = () => {
  const submitDownload = useSubmitDownload();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const url = formData.get("url") as string;
    submitDownload.mutate(url);
  };

  return (
    <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        name="url"
        label="URL"
        placeholder="https://www.example.com"
        type="text"
        required
      />
      <Button className="self-end" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default DownloadForm;
