"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();

  return (
    <div className="flex justify-between">
      <div>Muzer</div>
      <div>
        {session.data?.user && (
          <button
            onClick={() => {
              signOut();
            }}
            className="m-2 p-2 bg-blue-300"
          >
            logout
          </button>
        )}
        {!session.data?.user && (
          <button
            onClick={() => {
              signIn();
            }}
            className="m-2 p-2 bg-blue-300"
          >
            Signin
          </button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
