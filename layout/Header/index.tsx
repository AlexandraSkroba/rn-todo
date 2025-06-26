import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { getFullFormattedDate } from "@/helpers/date";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
};

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  const formattedDateNOW = getFullFormattedDate(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        {/* Левая часть - число */}
        <StyledText style={styles.dataContent}>
          {formattedDateNOW.day}
        </StyledText>

        {/* Правая часть - день и месяц */}
        <View style={styles.rightColumn}>
          <StyledText style={styles.dayContent}>
            {formattedDateNOW.weekday}
          </StyledText>
          <StyledText style={styles.monthContent}>
            {formattedDateNOW.month}
          </StyledText>
        </View>
      </View>

      <StyledText style={styles.completedTodos}>
        Completed: {completedTodos} / {totalTodos}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    alignItems: "center",
    borderRadius: 20,
  },
  headerMainContent: {
    marginBottom: 10,
    flexDirection: "row",
    gap: 10,
  },
  rightColumn: {
    justifyContent: "center",
  },
  dataContent: {
    fontSize: 70,
    fontWeight: "bold",
    color: COLORS.PRIMARY_TEXT,
  },
  dayContent: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.PRIMARY_TEXT,
  },
  monthContent: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.PRIMARY_TEXT,
    marginTop: -10,
  },
  completedTodos: {
    fontSize: 17,
    color: COLORS.PRIMARY_TEXT,
  },
});

export default Header;
