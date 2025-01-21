/**
 * AuthContext の仕様ドキュメント兼テストコード
 * 
 * テストシナリオ:
 * 1. 認証チェック（getCurrentUser）成功時: isAuthenticated が true になる
 * 2. 認証チェック（getCurrentUser）失敗時: isAuthenticated が false になる
 * 3. useAuth() 呼び出し時にエラーが投げられる
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthProvider, useAuth } from "../Auth/AuthContext";
import { getCurrentUser } from "aws-amplify/auth";

// Given: aws-amplify/auth をモック化
jest.mock("aws-amplify/auth", () => ({
  getCurrentUser: jest.fn(),
}));

const TestComponent = () => {
  const { isAuthenticated, showAuthDialog, hideAuthDialog } = useAuth();
  return (
    <div>
      <p data-testid="auth-state">{isAuthenticated ? "true" : "false"}</p>
      <button onClick={showAuthDialog}>Show</button>
      <button onClick={hideAuthDialog}>Hide</button>
    </div>
  );
};

describe("AuthContext", () => {
  it("認証チェック成功 => isAuthenticated が true になる", async () => {
    // Given: getCurrentUser が成功を返す
    (getCurrentUser as jest.Mock).mockResolvedValueOnce({ username: "testUser" });

    // When: AuthProvider 内でコンポーネントをレンダリング
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Then: 認証成功 -> isAuthenticated = true
    const authState = await screen.findByTestId("auth-state");
    expect(authState.textContent).toBe("true");
  });

  it("認証チェック失敗 => isAuthenticated が false になる", async () => {
    // Given: getCurrentUser が失敗を返す
    (getCurrentUser as jest.Mock).mockRejectedValueOnce(new Error("No user"));

    // When:
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Then:
    const authState = await screen.findByTestId("auth-state");
    expect(authState.textContent).toBe("false");
  });

  it("AuthProvider 外で useAuth() 呼び出し時にエラーが投げられる", () => {
    // Given: AuthProvider を使わないままコンポーネント実行
    const ErrorTest = () => {
      useAuth();
      return <div />;
    };

    // Then: エラーが投げられることを確認
    const originalError = console.error;
    console.error = jest.fn();
     expect(() => render(<ErrorTest />)).toThrowError();
    console.error = originalError; 
  });
});
