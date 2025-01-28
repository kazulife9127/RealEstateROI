// src/hooks/Auth/RequireAuth.test.tsx
/**
 * RequireAuth の仕様ドキュメント兼テストコード
 *
 * テストシナリオ:
 * 1. ログイン済み (isAuthenticated = true) => 子コンポーネントが表示される
 * 2. 未ログイン (isAuthenticated = false) => ダイアログが表示され、子コンポーネントは表示されない
 */

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RequireAuth } from "./RequireAuth";
import { AuthProvider } from "./AuthContext";
import { getCurrentUser } from "aws-amplify/auth";

jest.mock("aws-amplify/auth", () => ({
  getCurrentUser: jest.fn(),
}));

jest.mock("@aws-amplify/ui-react", () => ({
  Authenticator: ({ children }: any) =>
  children({ signOut: jest.fn(), user: { username: "mockUser" } }),
}));

describe("RequireAuth", () => {
  it("ログイン済み => 子コンポーネントが表示される", async () => {
    // Given: getCurrentUser が成功を返す
    (getCurrentUser as jest.Mock).mockResolvedValueOnce({ username: "testUser" });

    // When: コンポーネントをレンダリング
    render(
      <AuthProvider>
        <RequireAuth>
          <div data-testid="child">Child</div>
        </RequireAuth>
      </AuthProvider>
    );

    // Then: 非同期で認証完了後、子コンポーネントが表示される
    expect(await screen.findByTestId("child")).toBeInTheDocument();
  });

  it("未ログイン => ダイアログが表示され、子コンポーネントが表示されない", async () => {
    // Given: getCurrentUser が失敗を返す
    (getCurrentUser as jest.Mock).mockRejectedValueOnce(new Error("No user"));

    // When: コンポーネントをレンダリング
    render(
      <AuthProvider>
        <RequireAuth>
          <div data-testid="child">Child</div>
        </RequireAuth>
      </AuthProvider>
    );

    // Then: ダイアログ表示、子コンポーネント非表示
    await waitFor(() => {
      expect(screen.queryByTestId("child")).not.toBeInTheDocument();
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });
});
