import SubscriptionForm from 'molecules/SubscriptionForm'
import useSubscribe from 'hooks/useSubscribe'

const Subscription: React.FC = () => {
  const { isLoading: isSubscribing, mutate: onSubscribe } = useSubscribe()

  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full lg:-top-[216px] z-[30] bg-sky-100 lg:w-[520px] px-4 md:px-40 py-8 lg:p-8 lg:rounded-3xl shadow-lg mb-24">
        <div className="text-center text-xl font-medium text-gray-900">
          Leadership is your choice. If you want to be the one? learn to build trust and lift your team moving forward with our guides and tools.
        </div>
        <div className="mt-6 pt-4 lg:p-4 border-t-4 border-sky-700 border-opacity-80">
          <SubscriptionForm
            isLoading={isSubscribing}
            onSubscribe={onSubscribe}
          />
        </div>
      </div>
    </div>
  )
}

export default Subscription
