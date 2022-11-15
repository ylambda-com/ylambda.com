import withErrorHandling from 'lib/server/withErrorHandling'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AboutView from 'page-views/about'
import { dehydrate, QueryClient } from 'react-query'

export const getStaticProps: GetStaticProps = withErrorHandling(
  async ({ locale }) => {
    const queryClient = new QueryClient()

    return {
      props: {
        ...(await serverSideTranslations(locale as string, ['common'])),
        dehydratedState: dehydrate(queryClient),
      },
    }
  },
)

export default AboutView
