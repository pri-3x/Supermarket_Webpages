export default function TxList({ txs }) {
    if (txs.length === 0) return null;
  
    return (
      <>
        {txs.map((item) => (
          <div key={item} className="alert alert-info mt-5">
            <div className="flex-1">
            
              <label>Transaction Hash: {item.hash}</label>
            </div>
          </div>
        ))}
      </>
    );
  }
  