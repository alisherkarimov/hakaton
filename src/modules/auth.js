import AuthServise from "../service/auth";

const state = {
  isLoading: false,
  isLoggedIn: false,
};

const modules = {
  authStart(state) {
    state.isLoading = true;
  },
  authSuccess(state) {
    state.isLoading = false;
    state.isLoggedIn = true;
  },
  authFailure(state) {
    state.isLoading = false;
    state.isLoggedIn = false;
  },
};

const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("authStart");
      AuthServise.register(user)
        .then((res) => {
          console.log(res);
          context.commit("authSuccess");
        })
        .err((err) => {
          context.commit("authFailure");

          console.log(err);
        });
    });
  },
};

export default { state, modules, actions };
