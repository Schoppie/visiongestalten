GRANT INSERT ON public.contact_messages TO anon, authenticated;

CREATE POLICY "Website visitors can send contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(name)) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(trim(message)) BETWEEN 10 AND 2000
);