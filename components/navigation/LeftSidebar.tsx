"use client";

import React from "react";
import NavLinks from "./navbar/NavLinks";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const LeftSidebar = () => {
  const status = useSession();

  console.log(status);

  return (
    <section className="overflow-y-auto flex flex-col justify-between h-screen lg:w-[266px] max-sm:hidden background-light900_dark200 px-6 pb-8 sticky left-0 top-0 items-center border-r p-6 pt-36 shadow-light-300 dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="gap-3 flex flex-col w-full">
        {status.data ? (
          <Button
            className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
            onClick={() => signOut()}
          >
            <Link href={ROUTES.SIGN_IN}>
              <span className="primary-text-gradient">Sign Out</span>
            </Link>
          </Button>
        ) : (
          <>
            <Button
              className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
              asChild
            >
              <Link href={ROUTES.SIGN_IN}>
                <Image
                  src="/icons/account.svg"
                  alt="account"
                  width={20}
                  height={20}
                  className="inverted-colors lg:hidden"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </Link>
            </Button>
            <Button
              className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
              asChild
            >
              <Link href={ROUTES.SIGN_UP}>
                <Image
                  src="/icons/sign-up.svg"
                  alt="account"
                  width={20}
                  height={20}
                  className="inverted-colors lg:hidden"
                />
                <span className="max-lg:hidden">Sing Up</span>
              </Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
