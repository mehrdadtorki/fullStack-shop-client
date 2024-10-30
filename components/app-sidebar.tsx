"use client";

import {
  Command,
  Folder,
  Frame,
  LifeBuoy,
  Send,
  Settings2,
  ShoppingBag,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "Overview", url: "/dashboard/overview" },
        { title: "Analytics", url: "/dashboard/analytics" },
        { title: "Reports", url: "/dashboard/reports" },
      ],
    },
    {
      title: "Products",
      url: "/products",
      icon: ShoppingBag,
      items: [
        { title: "All Products", url: "/products" },
        { title: "Single Products", url: "/product" },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Folder,
      items: [
        { title: "All Projects", url: "/projects/all" },
        { title: "New Project", url: "/projects/new" },
        { title: "Archived", url: "/projects/archived" },
      ],
    },
    {
      title: "Team",
      url: "/team",
      icon: Frame,
      items: [
        { title: "Members", url: "/team/members" },
        { title: "Roles", url: "/team/roles" },
        { title: "Invitations", url: "/team/invitations" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "General", url: "/settings/general" },
        { title: "Security", url: "/settings/security" },
        { title: "Notifications", url: "/settings/notifications" },
      ],
    },
  ],
  navSecondary: [
    { title: "Help Center", url: "/help", icon: LifeBuoy },
    { title: "Send Feedback", url: "/feedback", icon: Send },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
