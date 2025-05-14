import BasePageLayout from "../components/BasePageLayout";
import TabbedContent from "../components/TabbedContent";
import SongComments from "../components/SongComments";

export default function CommentsPage() {
  const tabs = [
    {
      label: "Conversation",
      content: (
        <div class="max-w-2xl mx-auto">
          <SongComments contentId="test-content-id" />
        </div>
      ),
    },
  ];

  return (
    <BasePageLayout
      cover={<div />}
      info={<div />}
      streamingLinks={[]}
    >
      <title>Comments Test | mozworth</title>
      <meta name="description" content="Test the Solid Pod comments system." />
      <div class="py-8">
        <h1 class="text-3xl font-bold mb-6 text-teal-400">Comments Test Page</h1>
        <TabbedContent tabs={tabs} defaultTab="Conversation" />
      </div>
    </BasePageLayout>
  );
} 