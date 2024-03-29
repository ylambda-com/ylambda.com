import { event } from 'lib/client/GA'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { GA } from 'page-views/constants'

interface SubscriptionFormProps {
  elementId?: string
  isLoading: boolean
  onSubscribe: (email: string) => void
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  elementId,
  isLoading,
  onSubscribe,
}) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => onSubscribe(data?.email)

  return (
    <div id={elementId}>
      <div className="text-gray-900 font-semibold text-2xl">
        {t('Early access your must-have belt')}
      </div>
      <div className="mt-2">
        <p className="text-base text-gray-500">
          {t('No spam and unsubscribe at any time.')}
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 md:flex md:justify-between md:space-x-4 space-y-2 md:space-y-0 text-right md:text-left"
      >
        <div className="w-full">
          <div>
            <input
              {...register('email', {
                required: 'please input email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'please input valid email',
                },
              })}
              onFocus={() =>
                event(GA.ACTIONS.Email_Input_Focused, {
                  category: GA.CATEGORIES.Subscription,
                  label: GA.LABELS.Email_Input,
                })
              }
              onChange={() =>
                event(GA.ACTIONS.Email_Input_Changed, {
                  category: GA.CATEGORIES.Subscription,
                  label: GA.LABELS.Email_Input,
                })
              }
              className={classNames(
                'px-3 py-3 shadow-sm block w-full sm:text-sm rounded-md border placeholder-gray-400',
                {
                  'border-red-300 text-red-900 focus:outline-none focus:ring-red-500 focus:border-red-300':
                    errors?.email,
                  'border-gray-300 focus:border-sky-500 focus:ring-sky-500':
                    !errors?.email,
                },
              )}
              placeholder="you@ylambda.com"
            />
          </div>
          {errors?.email && errors?.email?.message && (
            <p className="mt-2 text-xs text-red-600">
              {errors?.email?.message as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="!w-[128px] !h-12 flex-none inline-flex justify-center items-center rounded-md border border-transparent bg-sky-600 px-6 py-2 text-base font-medium text-white hover:bg-sky-700"
          onClick={() =>
            event(GA.ACTIONS.Subscribe_Button_Click, {
              category: GA.CATEGORIES.Subscription,
              label: GA.LABELS.Subscribe_Button,
            })
          }
        >
          {isLoading ? (
            <div className="py-0.5">
              <svg
                className="animate-spin h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          ) : (
            t('Subscribe')
          )}
        </button>
      </form>
    </div>
  )
}

export default SubscriptionForm
