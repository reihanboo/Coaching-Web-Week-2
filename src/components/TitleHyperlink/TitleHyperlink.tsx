import { Flex, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Link } from "lucide-react";

interface TitleHyperlinkProps {
  title: string;
  hyperref: string;
}

export function TitleHyperlink({ title, hyperref }: TitleHyperlinkProps) {
  return (
    <Flex>
      <Title order={2} mb={10}>
        {title}
      </Title>
      <a
        href={'#' + hyperref}
        style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 5 }}
        onClick={() => {
          navigator.clipboard.writeText(window.location.href + '#' + hyperref);
          notifications.show({
            title: 'Berhasil tersalin',
            message: undefined,
          });
        }}
      >
        <Link size={15} />
      </a>
    </Flex>
  );
}
