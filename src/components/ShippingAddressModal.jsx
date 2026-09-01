function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

export default function ShippingAddressModal({ open, onClose, address, onConfirm, onEditAddress }) {
  if (!open) return null

  const handleConfirm = () => {
    onConfirm(address)
    onClose()
  }

  const handleEdit = () => {
    onEditAddress()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1a1a17]">Address</h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-[#9a988e] hover:bg-black/5 hover:text-[#1a1a17]"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="mt-4 border-b border-black/10" />

        {!address ? (
          <div className="mt-6 text-center">
            <p className="text-sm text-[#7a7a72]">
              You haven&rsquo;t saved a shipping address yet.
            </p>
            <button
              type="button"
              onClick={handleEdit}
              className="mt-4 rounded-md bg-[#3CA43C] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-[#2f8a30]"
            >
              Add an Address
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6 rounded-xl border-2 border-[#3CA43C] bg-[#eef4e9] p-5">
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#4a4a43]">Address</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#3c6e35]">
                  Main Address
                </span>
              </div>

              <p className="mt-3 text-base font-semibold text-[#1a1a17]">{address.line1}</p>

              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <p className="text-xs text-[#7a7a72]">Country</p>
                  <p className="text-sm font-semibold text-[#1a1a17]">{address.country}</p>
                </div>
                <div>
                  <p className="text-xs text-[#7a7a72]">Province</p>
                  <p className="text-sm font-semibold text-[#1a1a17]">{address.province}</p>
                </div>
                <div>
                  <p className="text-xs text-[#7a7a72]">City</p>
                  <p className="text-sm font-semibold text-[#1a1a17]">{address.city}</p>
                </div>
                <div>
                  <p className="text-xs text-[#7a7a72]">Postal Code</p>
                  <p className="text-sm font-semibold text-[#1a1a17]">{address.postalCode}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleEdit}
                className="mt-4 text-xs font-semibold text-[#3CA43C] hover:underline"
              >
                Edit Address
              </button>
            </div>

            <button
              type="button"
              onClick={handleConfirm}
              className="mt-6 w-full rounded-md bg-[#3CA43C] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2f8a30]"
            >
              Choose Address
            </button>
          </>
        )}
      </div>
    </div>
  )
}
