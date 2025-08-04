import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ChemicalReactionPage from "./pages/Chemical";
import Categories from "./pages/Categories";
import DownloadPdfArticlesPage from "./pages/DownloadPdfArticles";
import KnowledgePortal from "./pages/knowledgePortal/KnowledgePortal";
import DiwaliCelebration from "./pages/Categories/AdminPostDetails";
import ForumList from "./pages/Forum/ForumList/ForumList";
import ForumDiscussion from "./pages/Forum/ForumDiscussion/ForumDiscussion";
import Articles from "./pages/Articles/Articles";
import ArticleDetails from "./pages/Articles/ArticleDetails";
import NotFound from "./components/NotFound";
import AdminPostDetails from "./pages/Categories/AdminPostDetails";
import GlobalLoader from "./components/Loader/GlobalLoader";
import FilteredPdfArticles from "./pages/DownloadPdfArticles/commonDownloadPdfArticles/FilteredArticles";
import ContentBank from "./pages/ContentBank/ContentBank";
import KnowledgeCenter from "./pages/knowledgeCenter/knowledgeCenter";
import BlogContainer from "./pages/knowledgeCenter/knowledgeCenterComponents/SingleBlogPost";
import BlogEditor from "./pages/BlogEditor/components/BlogEditor";
import Blog from "./pages/BlogEditor/Blog";
import GhardaUnplugged from "./pages/GhardaUnplugged/GhardaUnplugged";
import CompanyAnnouncement from "./pages/CompanyAnnouncement/CompanyAnnouncement";

const RoutesAll = () => {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "content-bank",
          element: <ContentBank />,
        },
        {
          path: "knowledge-center",
          element: <KnowledgeCenter />,
        },
        {
          path: "edit-blog",
          element: <Blog />,
        },
        {
          path: "gharda-unplugged",
          element: <GhardaUnplugged />,
        },
        {
          path: "company-announcement",
          element: <CompanyAnnouncement />,
        },
        {
          path: "/singlePost/:id",
          element: <BlogContainer />,
        },
        {
          path: "/posts/:id",
          element: <AdminPostDetails />,
        },
        {
          path: "/categories/:name",
          element: <Categories />,
        },
        {
          path: "/articles/:id",
          element: <ArticleDetails />,
        },
        {
          path: "/chemical-details/:id",
          element: <ChemicalReactionPage />,
        },
        {
          path: "/articles",
          element: <Articles />,
        },
        {
          path: "/knowledge-portal",
          element: <KnowledgePortal />,
        },
        {
          path: "/pdf-articles",
          element: <DownloadPdfArticlesPage />,
        },
        {
          path: "/forum",
          element: <ForumList />,
        },
        {
          path: "/forum-view/:id",
          element: <ForumDiscussion />,
        },
        {
          path: "/pdf-articles/:id/:name",
          element: <FilteredPdfArticles />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalLoader />
      <RouterProvider router={routers} />
    </>
  );
};
export default RoutesAll;
