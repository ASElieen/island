import { join } from 'path'
//..表示上退一级 D:\1FrontEnd\island
export const PACKAGE_ROOT = join(__dirname, '..', '..', '..')
export const CLIENT_ENTRY_PATH = join(
    PACKAGE_ROOT,
    "src",
    "runtime",
    "client-entry.tsx"
);
export const DEFAULT_HTML_PATH = join(PACKAGE_ROOT, 'template.html')
