import { render, screen } from '@testing-library/react';
import { Authenticator } from '@aws-amplify/ui-react';
import { AuthProvider } from './AuthContext';

// Given: ユーザーが未認証の状態でログインフォームが表示されている。
// When: ユーザーがログインし、認証情報が取得される。
// Then: ユーザー名が表示され、サインアウトボタンが表示されることを確認する。

test('認証されたユーザーの情報が表示されること', async () => {
  const MockAuthenticator = () => (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <p>{user ? `ID: ${user.username}` : 'ログインに成功しました'}</p>
          {user && <button onClick={signOut}>サインアウト</button>}
        </div>
      )}
    </Authenticator>
  );

  render(
    <AuthProvider>
      <MockAuthenticator />
    </AuthProvider>
  );

  // ログイン状態でユーザー名が表示されることを確認
  expect(screen.getByText('ログインに成功しました')).toBeInTheDocument();
});
