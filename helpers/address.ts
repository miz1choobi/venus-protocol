import GovernanceBscMainnet from "@venusprotocol/governance-contracts/deployments/bscmainnet.json";
import GovernanceBscTestnet from "@venusprotocol/governance-contracts/deployments/bsctestnet.json";
import OracleMainnet from "@venusprotocol/oracle/deployments/bscmainnet.json";
import OracleTestnet from "@venusprotocol/oracle/deployments/bsctestnet.json";
import ProtocolShareReserveProxyMainnet from "@venusprotocol/protocol-reserve/deployments/bscmainnet/ProtocolShareReserve_Proxy.json";
import ProtocolShareReserveProxyTestnet from "@venusprotocol/protocol-reserve/deployments/bsctestnet/ProtocolShareReserve_Proxy.json";

//TESTNET DEPLOYED CONTRACTS
import Mainnet from "../deployments/bscmainnet.json";
//MAINNET DEPLOYED CONTRACTS
import Testnet from "../deployments/bsctestnet.json";

const ADDRESSES = {
  bsctestnet: {
    governorProxy: GovernanceBscTestnet.contracts.GovernorBravoDelegator.address,
    normalVipTimelock: GovernanceBscTestnet.contracts.NormalTimelock.address,
    xvsVault: Testnet.contracts.XVSVaultProxy.address,
    acm: GovernanceBscTestnet.contracts.AccessControlManager.address,
    treasury: Testnet.contracts.VTreasury.address,
    oracle: OracleTestnet.contracts.ResilientOracle_Proxy.address,
    vai: Testnet.contracts.VAI.address,
    wbnb: Testnet.contracts.WBNB.address,
    pancakeFactory: Testnet.contracts.pancakeFactory.address,
    unitroller: Testnet.contracts.Unitroller.address,
    vbnb: Testnet.contracts.vBNB.address,
    protocolShareReserve: ProtocolShareReserveProxyTestnet.address,
    xvs: Testnet.contracts.XVS.address,
    eth: Testnet.contracts.ETH.address,
    btcb: Testnet.contracts.BTCB.address,
    usdc: Testnet.contracts.USDC.address,
    usdt: Testnet.contracts.USDT.address,
    veth: Testnet.contracts.vETH.address,
    vbtc: Testnet.contracts.vBTC.address,
    vusdc: Testnet.contracts.vUSDC.address,
    vusdt: Testnet.contracts.vUSDT.address,
  },
  bscmainnet: {
    governorProxy: GovernanceBscMainnet.contracts.GovernorBravoDelegator.address,
    normalVipTimelock: GovernanceBscMainnet.contracts.NormalTimelock.address,
    xvsVault: Mainnet.contracts.XVSVaultProxy.address,
    acm: GovernanceBscMainnet.contracts.AccessControlManager.address,
    treasury: Mainnet.contracts.VTreasury.address,
    oracle: OracleMainnet.contracts.ResilientOracle_Proxy.address,
    vai: Mainnet.contracts.VAI.address,
    wbnb: Mainnet.contracts.WBNB.address,
    pancakeFactory: Mainnet.contracts.pancakeFactory.address,
    unitroller: Mainnet.contracts.Unitroller.address,
    vbnb: Mainnet.contracts.vBNB.address,
    protocolShareReserve: ProtocolShareReserveProxyMainnet.address,
    xvs: Mainnet.contracts.XVS.address,
    eth: Mainnet.contracts.ETH.address,
    btcb: Mainnet.contracts.BTCB.address,
    usdc: Mainnet.contracts.USDC.address,
    usdt: Mainnet.contracts.USDT.address,
    veth: Mainnet.contracts.vETH.address,
    vbtc: Mainnet.contracts.vBTC.address,
    vusdc: Mainnet.contracts.vUSDC.address,
    vusdt: Mainnet.contracts.vUSDT.address,
  },
};
export default ADDRESSES;
