/*
  # Create problems table

  1. New Tables
    - `problems`
      - `id` (uuid, primary key)
      - `title` (text, required) - Brief title of the problem
      - `description` (text, required) - Detailed description of the problem
      - `email` (text, optional) - Contact email
      - `status` (text, default 'pending') - Status of the problem
      - `created_at` (timestamptz, default now())
      
  2. Security
    - Enable RLS on `problems` table
    - Add policy for anyone to insert problems
    - Add policy for anyone to read problems
*/

CREATE TABLE IF NOT EXISTS problems (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  email text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE problems ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit problems"
  ON problems
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view problems"
  ON problems
  FOR SELECT
  TO anon
  USING (true);