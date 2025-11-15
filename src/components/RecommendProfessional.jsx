import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function RecommendProfessional() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Button
      className="bg-blue-400  hover:text-white hover:cursor-pointer dark:bg-purple-400 dark:hover:bg-white dark:hover:text-dark w-[50%]"
      onClick={() => {
        toast.success("Profissional Recomendado!")
      }}
    >
      Recomendar 
    </Button>
  );
}
