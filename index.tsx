import { XiaoBoard } from "@tscircuit/common"

/**
 * RP2040-Zero board using the standard XiaoBoard RP2040 variant
 * from @tscircuit/common.
 *
 * The XiaoBoard component includes the full Waveshare RP2040-Zero
 * form factor with:
 *   - RP2040 microcontroller
 *   - USB-C connector
 *   - WS2812B RGB LED
 *   - Flash memory
 *   - 3.3V LDO regulator
 *   - 20 GPIO pins broken out
 */
export default () => <XiaoBoard variant="RP2040" name="U1" />
