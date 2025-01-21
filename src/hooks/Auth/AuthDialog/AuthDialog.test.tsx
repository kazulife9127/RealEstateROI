// __tests__/AuthDialog.test.tsx
/**
 * AuthDialog の仕様ドキュメント兼テストコード
 * 
 * テストシナリオ:
 * 1. open = false の場合 => ダイアログが表示されない
 * 2. open = true の場合 => ダイアログが表示される
 * 3. ユーザーが存在する時 => ユーザー名が表示される & サインアウトボタンが表示される
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthDialog } from "./AuthDialog";

jest.mock("@aws-amplify/ui-react", () => ({
  Authenticator: ({ children }: any) =>
    children({ signOut: jest.fn(), user: { username: "testUser" } }),
}));

describe("AuthDialog", () => {
  it("open = false の場合 => ダイアログが表示されない", () => {
    // Given / When:
    render(<AuthDialog open={false} onClose={jest.fn()} />);

    // Then:
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("open = true の場合 => ダイアログが表示される", () => {
    // Given / When:
    render(<AuthDialog open={true} onClose={jest.fn()} />);

    // Then:
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("ユーザーが存在する場合 => ユーザー名とサインアウトボタンが表示される", () => {
    // Given:
    render(<AuthDialog open={true} onClose={jest.fn()} />);

    // Then:
    expect(screen.getByText("ID: testUser")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "signOut" })).toBeInTheDocument();
  });
});
