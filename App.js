import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SkillLinkApp() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Skill Link</h1>
        <Button>Login</Button>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Welcome to Skill Link</h2>
        <p className="text-gray-600">
          A platform to showcase your skills and connect with potential employers.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
            <p className="text-gray-700">
              Add your skills, experience, and portfolio to stand out.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-xl font-bold mb-2">Explore Opportunities</h3>
            <p className="text-gray-700">
              Browse jobs and freelance gigs that match your skills.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-xl font-bold mb-2">Connect with Employers</h3>
            <p className="text-gray-700">
              Chat with companies and apply directly through Skill Link.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <div className="max-w-md bg-white p-6 rounded-xl shadow-md">
          <form className="space-y-4">
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
