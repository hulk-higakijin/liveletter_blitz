import React, { Suspense } from "react";
import { Form, FormProps } from "src/app/components/Form";
import { LabeledTextField } from "src/app/components/LabeledTextField";

import { z } from "zod";
export { FORM_ERROR } from "src/app/components/Form";

export function PostForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="title"
        label="Title"
        placeholder="Title"
        type="text"
      />
      <LabeledTextField
        name="emoji"
        label="Emoji"
        placeholder="Emoji"
        type="text"
      />
    </Form>
  );
}
