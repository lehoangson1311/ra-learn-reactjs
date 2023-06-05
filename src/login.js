import React from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "", errors: [] };
  }
  /**
   * lắn nghe -> xử lý khi giá trị trong các ô input thay đổi
   */
  handleChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    await this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.prevenDefault();

    // Valiedate email
    // 1)bắt buộc nhập
    // 2)độ dài: 4 - 10
    // 3)chỉ cho sử dụng alphabet numberic
    const errors = this.state.errors;
    const username = this.state.username;
    if (username.length === 0) {
      errors.username = "tên đăng nhập là bắt buộc";
    } else if (username.length < 4 || username.length > 10) {
      errors.username = " độ dài tên đăng nhập từ 4 đến 10 ký tự";
    } else if (!username.match(/^[A-Za-z0-9]+$/)) {
      errors.username = "vui lòng không dùng ký tự đặc biệt";
    }

    // valiedate pass
    // 1)Bắt buộc nhập
    // 2) độ dài: 6- 10
    // 3)chỉ cho sử dụng alphabet numberic
    const password = this.state.password;
    if (password.length === 0) {
      errors.password = "mật khẩu là bắt buộc";
    } else if (password.length < 4 || password.length > 10) {
      errors.password = " độ dài mật khẩu từ 4 đến 10 ký tự";
    } else if (password.match(/^[A-Za-z0-9]+$/)) {
      errors.password = "vui lòng không dùng ký tự đặc biệt";
    }
  };

  validateUsername = () => {};
  validatePassword = () => {};

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Tên mật khẩu</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label> Mật khẩu</label>
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Đăng nhập</button>
            <button>Reset input</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
