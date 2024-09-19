# Password Generator CLI

## Features

- **Customizable Length**: You can specify the length of the password with the `--length` or `-l` flag (default: 8 characters).
- **Include Numbers**: Add numbers to the password with the `--numbers` or `-n` flag.
- **Include Uppercase Letters**: Generate passwords with uppercase letters using the `--uppercase` or `-u` flag.
- **Include Symbols**: Add symbols for extra security using the `--symbols` or `-s` flag.
- **Help Command**: Displays helpful information about how to use the tool with the `--help` or `-h` flag.

### Installation

First, install the dependencies:

```bash
npm install
```

### Running the CLI

To generate a password, run the following command in your terminal:

```bash
node index.js --length [number] --numbers --uppercase --symbols
```

Here’s an example that generates a 12-character password with numbers, uppercase letters, and symbols:

```bash
password-generator --length 12 --numbers --uppercase --symbols
```

### Example Outputs

- If you run:

```bash
password-generator --length 10 --numbers --symbols
```

- **Output**: `g8$d&hf@z3`

- If you run:

```bash
password-generator --length 15 --uppercase --symbols
```

- **Output**: `L$sN@YgXb*Pq&Z!`

### Development

Clone the repo:

```bash
git clone https://github.com/Elbaton1/PasswordGen.git
```

Install dependencies:

```bash
npm install
```

Test the application:

```bash
node index.js --help
```
